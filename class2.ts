class Shape {
    shoutout() {
        throw new Error("Method not implemented.");
    }
    area: number;    
    private color: string;

    constructor ( public name: string, width: number, height: number ) {        
        this.area = width * height;        
        this.color = "pink";    
    };
}