
let i;
let j;
let n = 8;
let row;



for(i = 1;i <= n;i++)
{
    row ="";
    for(j=1;j<=n;j++)
        {
            row = row + "*";
        }
            console.log(row);
}



let i;
let j;
let n = 8;
let row;



for(i = 0;i <= n;i++)
{
    row ="";
    for(j=0;j<=n;j++)
        {
            if (i == 0 || j == 0 || i == n || j == n)
           {
            row = row + "*";
           }
           else
           {
            row = row + " ";
           }
        }
            console.log(row);
}  


            let i;
            let j;
            let n = 11;
            let row;
            
            
            
            for(i = 0;i <= n - 1;i++)
            {
                row ="";
                for(j=0;j <= n - 1;j++)
                    {
                        if (i == 0 || j == 0 || j == n - 1 || i == n - 1 || i == j || j == Math.floor(n/2) || i == Math.floor(n/2) || i + j == n - 1 || i + j == Math.floor(n/2) || i - j == Math.floor(n/2) || i + j == (n-1) + Math.floor(n/2) 
                        || j - i == Math.floor(n/2))
                       {
                        row = row + "*";
                       }
                       else
                       {
                        row = row + " ";
                       }
                    }
                        console.log(row);

            }