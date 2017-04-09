//Recieve a boolean array of elements representing if a picture is shown or not, ordered by pairs of correlating, identical images
function(props){

    total=props.total
    array=props.array

    curr=0
    
    for (i in array.length()){
        //check only pairs adjacent starting with first element
        if(array[i]%2==0 & array[i+1]%2==1)
            if(array[i] & array[i+1]){
                curr++;
                if(total==curr){
                    return true;
                }    
            }
    }
    return false;
}