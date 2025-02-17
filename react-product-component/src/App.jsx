 import "./App.css";

 function Title() { 
   return(
<div>  
      <h2>  Hello Coders</h2> 
     </div>
   ) ;  
 }  
 function Description() {
  return (
<h1>We Are Engineers </h1>
  ) ;
   
} 
  function App() { 
 
       return (
         <div> 
         <Title/> 
          <Description/> 
          <Title/>  
          <Description/>  
         </div> 
       ) ;
  }  

   export default App ;