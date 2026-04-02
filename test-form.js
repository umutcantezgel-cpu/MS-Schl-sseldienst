const { submitContactForm } = require('./.next/server/app/actions/contact.js');

async function run() {
  const fd = new FormData();
  fd.append('name', 'Test');
  fd.append('email', 'test@test.com');
  fd.append('message', 'Test message here');
  
  try {
     const res = await submitContactForm({success: false, message: ''}, fd);
     console.log('Result:', res);
  } catch(e) {
     console.error('Error:', e);
  }
}
run();
