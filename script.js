function getComputerChoice()
{
  const ans=["scissors","rock","paper"];
  return ans[parseInt(Math.random()*3)]
}


function Round(playerSelection,ComputerSelection)
{
  let result=[];
  const ans=["scissors","rock","paper"];
  if(playerSelection.toLowerCase()===ans[0])
    {
       if(ComputerSelection.toLowerCase()===ans[0])
    {
     results=[0,0];
    }
  else if(ComputerSelection.toLowerCase()===ans[1])
  {
    results=[0,1];
  }
  else if(ComputerSelection.toLowerCase()===ans[2])
  {
    results=[1,0];
  }
    }
  else if(playerSelection.toLowerCase()===ans[1])
  {
     if(ComputerSelection.toLowerCase()===ans[0])
    {
      results=[0,1];
    }
  else if(ComputerSelection.toLowerCase()===ans[1])
  {
    results=[0,0];
  }
  else if(ComputerSelection.toLowerCase()===ans[2])
  {
    results=[1,0];
  }
    
  }
  else if(playerSelection.toLowerCase()===ans[2])
  {
     if(ComputerSelection.toLowerCase()===ans[0])
    {
        results=[0,1];      
    }
  else if(ComputerSelection.toLowerCase()===ans[1])
  {
    results=[1,0];
  }
  else if(ComputerSelection.toLowerCase()===ans[2])
  {
    results=[0,0];
  }
  }


  return results;
}



function game()
{
  let P=0
  let C=0
  for(let i =0;i<5;i++)
    {
      const player=prompt("rock,scissors,paper ?")
      const computer = getComputerChoice()
      const arr = Round(player,computer)
      console.log("Round " + (i+1).toString() )
      if(arr[0]===1)
      {
        P=P+1
        console.log("You won!")
      }
      else if(arr[1]===1)
      {
        C=C+1
        console.log("Yo lost!")
      }
      else
      {
        console.log("null round")
      }
    }

    document.querySelector('div').innerText= `Player: ${P} - ${C} : Computer`
}


game()
