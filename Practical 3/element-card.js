class ElementCard extends HTMLElement {

    connectedCallback() {

        const title = this.getAttribute("title") || "Card";
        const icon = this.getAttribute("icon") || "";
        const theme = this.getAttribute("theme") || "default";

        // Save the content placed inside <element-card>
        const content = this.innerHTML;

        this.innerHTML = `
            <div class="element-card ${theme}-theme">

                <h2>${icon} ${title}</h2>

                <div class="component-content">
                    ${content}
                </div>

            </div>
        `;
    }
}

customElements.define("element-card", ElementCard);