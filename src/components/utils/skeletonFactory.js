import { LitElement } from "lit";

export default class SkeletonFactory extends LitElement {

    constructor() {
        super();
    }

    getSourceElement(element) {
        return this.sourceElement = this.shadowRoot.querySelector(element);
    }

    getTypeSourceElement(element) {
        return this.typeSourceElement = typeof this.shadowRoot.querySelector(element);
    }

    getDimentions(element) {
        let sourceElement = this.getSourceElement(element);
        return this.dimentions = {
            width: sourceElement.offsetWidth,
            height: sourceElement.offsetHeight
        };
    }

    createNewSkeleton(element, skeletonFormat) {
        let dimentions = this.getDimentions(element);
        let skeleton = document.createElement('ts-skeleton-item');

        skeleton.setAttribute('width', dimentions.width);
        skeleton.setAttribute('height', dimentions.height);
        skeleton.setAttribute('format', skeletonFormat ? skeletonFormat : 'flat');

        return skeleton;
    }

    renderSkeleton(element) {
        let sourceElement;
        let skeletonElement;
        
        if (typeof element === 'object') {
            element.forEach(e => {
                try {
                    sourceElement = this.getSourceElement(e);
                    skeletonElement = this.createNewSkeleton(e);
                } catch (error) {
                    console.warn("Error: One or more elements can't be parsed: ", error);
                    return;
                }
                return sourceElement.style.display = 'none', sourceElement.parentNode.insertBefore(skeletonElement, sourceElement);
            })

        } else {
            console.log('elemento de origem é um elemento ===> ', element);
            sourceElement = this.getSourceElement(element);
            skeletonElement = this.createNewSkeleton(element);

            return sourceElement.style.display = 'none', sourceElement.parentNode.insertBefore(skeletonElement, sourceElement);
        }
    }

    removeSkeleton(element) {
        let sourceElement;
        let skeletonElement;

        if (typeof element === 'object') {
            element.forEach(e => {
                try {
                    skeletonElement = this.getSourceElement('ts-skeleton-item');
                    sourceElement = this.getSourceElement(e);
                } catch (error) {
                    console.warn("Error: One or more elements can't be parsed: ", error);
                    return;
                }

                if (!sourceElement || !skeletonElement) {
                    return;
                }

                return skeletonElement.remove(), sourceElement.style = '';
            });
        } else {
            skeletonElement = this.shadowRoot.querySelector('ts-skeleton-item');
            sourceElement = this.getSourceElement(element);

            return skeletonElement.remove(), sourceElement.style = '';
        }
    }
}