import Button from "./Button";
import Count from "./Count";

export default function Counter({id,increment,count,decrement}){
    return(
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count}/>
            <div class="flex space-x-3">
                <Button handler={increment}>Increment</Button>
                <Button handler={decrement}>Decrement</Button>
            </div>
        </div>
    )
}