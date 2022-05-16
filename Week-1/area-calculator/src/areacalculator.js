const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    if(choice == null) {
        return -1;
    } else {
        switch(choice){
            case 'square':
                if(side == null){
                    return -1;
                } else {
                    area = side * side;
                }
                break;

            case 'rectangle':
                if(length == null || breadth == null){
                    return -1;
                } else {
                    area = length * breadth
                }
                break;

            case 'circle':
                if(radius == null){
                    return -1;
                } else {
                    area = radius * radius * pi;
                }
                break;
            default:
                return -1;    
        }
    }
    
    return area
}
module.exports = {calculateArea}
