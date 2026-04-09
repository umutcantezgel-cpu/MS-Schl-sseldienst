export interface FormspreeResponse {
  ok: boolean;
  next?: string;
  error?: string;
}

export interface FormSubmitError {
  type: 'network' | 'validation' | 'server' | 'ratelimit';
  message: string;
}

export const submitToFormspree = async (
  formId: string, 
  data: Record<string, unknown>
): Promise<{ success: boolean; error?: FormSubmitError }> => {
  if (!formId || formId === 'demo-form' || formId.includes('REPLACE')) {
    // Demo-Mode Simulator
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1500);
    });
  }

  let response: Response | null = null;
  const retries = 3;

  for (let i = 0; i < retries; i++) {
    try {
      response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) break;
      if (response.status >= 500) throw new Error('Server error');
      break; // 400-499 errors should not be retried
    } catch (err: unknown) {
      if (i === retries - 1) {
        return { 
          success: false, 
          error: { 
            type: 'network', 
            message: 'Netzwerkfehler. Überprüfen Sie Ihre Internetverbindung.' 
          } 
        };
      }
      await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
    }
  }

  if (!response) {
    return { 
      success: false, 
      error: { 
        type: 'network', 
        message: 'Ein unerwarteter Netzwerkfehler ist aufgetreten.' 
      } 
    };
  }

  try {
    if (response.status === 429) {
      return { 
        success: false, 
        error: { 
          type: 'ratelimit', 
          message: 'Zu viele Anfragen. Bitte warten Sie ein paar Minuten.' 
        } 
      };
    }

    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      return { 
        success: false, 
        error: { 
          type: 'server', 
          message: result.error || 'Fehler beim Absenden. Bitte versuchen Sie es später erneut.' 
        } 
      };
    }

    const { ok } = await response.json() as FormspreeResponse;
    return { success: ok };
    
  } catch (err: unknown) {
    return { 
      success: false, 
      error: { 
        type: 'network', 
        message: 'Ein Fehler ist beim Auswerten der Antwort aufgetreten.' 
      } 
    };
  }
};
