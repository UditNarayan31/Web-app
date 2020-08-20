export class Init {
    load() {
        if(localStorage.getItem('todos') === null || 
        localStorage.getItem('todos') == undefined){
            let todos = [
                {},
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }else{

        }
    }
}