import { useEffect } from "react";

const useKeyPress = ( callback:any , targetKey:any) =>{
    useEffect(() => {
      const keyPressHander =(e:any)=> {
        if (e.key === targetKey){
          callback();
           
        }

      };
      window.addEventListener("keydown", keyPressHander);
      return () => window.removeEventListener("keydown", keyPressHander);
    }, [callback, targetKey]);   
  }

export default useKeyPress ;

