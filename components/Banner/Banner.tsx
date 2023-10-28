function getCharacter(obj:any): Promise<any> {
    const url = `https://rickandmortyapi.com/api/character/${obj.index}`;
  
    return new Promise((resolve) => {
      setTimeout( ()=> {
          return fetch(url)   
          .then( res => res.json() )
          .then( data => resolve(data) )
      },3000)
    })
  }
  
  async function Banner(props:any){
      const character = await getCharacter(props.data);
  
      return (
          <div>
              Name: {character.name}
          </div>
      )
  }
  
  export default Banner