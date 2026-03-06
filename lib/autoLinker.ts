import { CONTENT_GRAPH } from "./contentGraph";
import { anchorTexts } from "./anchorTexts";

export function autoLinkContent(text: string, currentServiceId: string): string {
    let linkedText = text;

    const currentNode = CONTENT_GRAPH.find(n => n.slug === currentServiceId);
    if (!currentNode || !currentNode.relatedSlugs) return text;

    currentNode.relatedSlugs.forEach(relatedId => {
        const relatedNode = CONTENT_GRAPH.find(n => n.slug === relatedId);
        if (!relatedNode) return;

        const anchors = anchorTexts[relatedId] || [relatedNode.title];

        for (const anchor of anchors) {
            const regex = new RegExp(`\\b(${anchor})\\b`, 'i');
            if (regex.test(linkedText)) {
                linkedText = linkedText.replace(regex, `<a href="${relatedNode.slug}" class="text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 underline decoration-orange-200 dark:decoration-orange-900 underline-offset-4 transition-colors font-medium">$1</a>`);
                break; // Link to each related service only once
            }
        }
    });

    return linkedText;
}
