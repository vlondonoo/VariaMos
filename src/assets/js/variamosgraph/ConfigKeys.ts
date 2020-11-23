import { mxgraphFactory } from "ts-mxgraph";
const { mxEvent } = mxgraphFactory({mxLoadResources: false, mxLoadStylesheets: false});

export class ConfigKeys {
    
    private graph:any; //mxGraph (mxGraph)
    private model:any; //mxGraphModel (mxGraphModel)
    private keyHandler:any; //mxKeyHandler (mxKeyHandler)

    public constructor(graph:any, model:any, keyHandler:any) {
        this.graph = graph;
        this.model = model;
        this.keyHandler = keyHandler;
    }

    public getGraph(){
        return this.graph;
    }

    public getModel(){
        return this.model;
    }

    public getKeyHandler(){
        return this.keyHandler;
    }

    public initializeKeys(){
        this.suprKey();
    }

    public suprKey(){
        let graph = this.graph;
        let suprFunction = function(evt:any){
			if (graph.isEnabled())
			{
                let removedCells = graph.removeCells();
            }
        }
        this.keyHandler.bindKey(46,suprFunction);
    }

    /*public mouseWheel(){ //interfere with the browser wheel event
        let graph = this.graph;
        mxEvent.addMouseWheelListener(function(evt:any, up:any){
            if(evt.ctrlKey && up){
                graph.zoomIn();
                mxEvent.consume(evt);
            }else if(evt.ctrlKey){
                graph.zoomOut();
                mxEvent.consume(evt);
            }
        },null);
    }*/
}