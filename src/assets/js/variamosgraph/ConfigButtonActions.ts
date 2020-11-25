import { Button } from './Button';
import { mxgraphFactory } from "ts-mxgraph";

export class ConfigButtonActions {

    private buttons:Button[];
    private graph:any; //mxGraph (mxGraph)
    private model:any; //mxGraphModel (mxGraphModel)
    private $store:any; //references vuex store
    private $modal:any; //references modalPlugin

    public constructor(graph:any, model:any, modal:any, store:any, buttons:any) {
        this.buttons = buttons;
        this.graph = graph;
        this.model = model;
        this.$modal = modal;
        this.$store = store;
    }

    public getButtons(){
        return this.buttons;
    }

    public getGraph(){
        return this.graph;
    }

    public getModel(){
        return this.model;
    }

    public removeAllEventListeners(){
        for (let i = 0; i < this.buttons.length; i++) {
            const buttonId = this.buttons[i].getId();
            const oldButton = document.getElementById(buttonId);
            if(oldButton){
                let newButton = oldButton.cloneNode(true);
                if(newButton != null && oldButton.parentNode != null){
                    oldButton.parentNode.replaceChild(newButton, oldButton);
                }
            }
        }
    }

    public initializeActions(){
        for (let i = 0; i < this.buttons.length; i++) {
            const functionToExecute = this.buttons[i].getId();
            if((this as any)[functionToExecute]){ // Verify if the function exists
                const currentButton = document.getElementById(functionToExecute);
                (this as any)[functionToExecute](currentButton); // Execute the function exists
            }
        }
    }

    public xml(currentButton:HTMLElement){
        const { mxCodec, mxUtils } = mxgraphFactory({mxLoadResources: false, mxLoadStylesheets: false});
        const model = this.model;
        const modal = this.$modal;
        currentButton.addEventListener('click', function () {
            let encoder = new mxCodec();
            let node = encoder.encode(model);
            let xmlCode = mxUtils.getPrettyXml(node);
            let parsedXml = String(xmlCode).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            let stringBody = "<div class='vertical-scroll border'><pre lang='xml'>"+parsedXml+"</pre></div>";
            modal.setData("", "XML code", stringBody);
            modal.click();
        });
    }

    public zoomIn(currentButton:HTMLElement){
        let graph = this.graph;
        currentButton.addEventListener('click', function () {
            graph.zoomIn();
        });
    }

    public delete(currentButton:HTMLElement){
        let graph = this.graph;
        currentButton.addEventListener('click', function () {
            if (graph.isEnabled())
			{
                let removedCells = graph.removeCells();
            }
        });
    }

    public zoomOut(currentButton:HTMLElement){
        let graph = this.graph;
        currentButton.addEventListener('click', function () {
            graph.zoomOut();
        });
    }

    public zoomReset(currentButton:HTMLElement){
        let graph = this.graph;
        currentButton.addEventListener('click', function () {
            graph.view.scaleAndTranslate(1, 0, 0);
        });
    }

    public img(currentButton:HTMLElement){
        //const { mxPrintPreview } = mxgraphFactory({mxLoadResources: false, mxLoadStylesheets: false});
        //const graph = this.graph;
        //preview.open();
        /*currentButton.addEventListener('click', function () {
            const preview = new mxPrintPreview(graph,1,10,"");
            preview.open(null,null,null,null);
        });*/ //not working
    }
    
}