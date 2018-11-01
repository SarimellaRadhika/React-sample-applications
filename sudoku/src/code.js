else{
                
    for(let b=j,a=0;a<=8;a++)
    {
        if(temp[a][b]===value)
        {
            document.getElementById(id).style.color="red"
        }
    }
    if(i<=2)
    {
        if(j<=2)
            {
                for(let a=0;a<=2;a++)
                {
                    for(let b=0;b<=2;b++)
                    {
                        if(a===i&&b===j)
                        continue
                        else
                        {
                            document.getElementById(id).style.color="red"
                        }
                    }
                }
            }
        }
        // if(j>2&&j<=5)
        //     {
        //         for(let a=0;a<=2;a++)
        //         {
        //             for(let b=3;b<=5;b++)
        //             {
        //                 if(temp[a][b]===value)
        //                 if(a===i&&b===j)
        //                 continue
        //                 else
        //                 {
        //                     document.getElementById(id).style.color="red"
        //                 }
        //             }
        //         }
        //     }
        // else
        //     {
        //         for(let a=0;a<=2;a++)
        //         {
        //             for(let b=6;b<=8;b++)
        //             {
        //                 if(temp[a][b]===value)
        //                 if(a===i&&b===j)
        //                 continue
        //                 else
        //                 {
        //                     document.getElementById(id).style.color="red"
        //                 }
        //             }
        //         }
        //     }
    }
    // else if(i>2&&i<=5)
    // {
    //     if(j<=2)
    //         {
    //             for(let a=3;a<=5;a++)
    //             {
    //                 for(let b=0;b<=2;b++)
    //                 {
    //                     if(a!==i&&b!==j&&temp[a][b]===value)
    //                     {
    //                         document.getElementById(id).style.color="red"
    //                     }
    //                 }
    //             }
    //         }
    //     if(j>2&&j<=5)
    //         {
    //             for(let a=3;a<=5;a++)
    //             {
    //                 for(let b=3;b<=5;b++)
    //                 {
    //                     if(a!==i&&b!==j&&temp[a][b]===value)
    //                     {
    //                         document.getElementById(id).style.color="red"
    //                     }
    //                 }
    //             }
    //         }
    //     else
    //         {
    //             for(let a=3;a<=5;a++)
    //             {
    //                 for(let b=6;b<=8;b++)
    //                 {
    //                     if(a!==i&&b!==j&&temp[a][b]===value)
    //                     {
    //                         document.getElementById(id).style.color="red"
    //                     }
    //                 }
    //             }
    //         }
    // }
    // else
    // {
    //     if(j<=2)
    //         {
    //             for(let a=6;a<=8;a++)
    //             {
    //                 for(let b=0;b<=2;b++)
    //                 {
    //                     if(a!==i&&b!==j&&temp[a][b]===value)
    //                     {
    //                         document.getElementById(id).style.color="red"
    //                     }
    //                 }
    //             }
    //         }
    //     if(j>2&&j<=5)
    //         {
    //             for(let a=6;a<=8;a++)
    //             {
    //                 for(let b=3;b<=5;b++)
    //                 {
    //                     if(a!==i&&b!==j&&temp[a][b]===value)
    //                     {
    //                         document.getElementById(id).style.color="red"
    //                     }
    //                 }
    //             }
    //         }
    //     else
    //         {
    //             for(let a=6;a<=8;a++)
    //             {
    //                 for(let b=6;b<=8;b++)
    //                 {
    //                     if(a!==i&&b!==j&&temp[a][b]===value)
    //                     {
    //                         document.getElementById(id).style.color="red"
    //                     }
    //                 }
    //             }
    //         }
    //  }