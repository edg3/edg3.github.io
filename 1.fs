// Ex. pg 24
// Make a recursive fn.
// a
(*let rec numOdd = fun  s e c ->
                let ans = match s%2=1 with
                          | true -> c + 1
                          | false -> c
                match s=e with
                | false -> numOdd (s + 1) e ans
                | true -> ans*)
// b
(*let rec nextMul = fun s n ->
                    match s%n=0 with
                    | false -> nextMul (s+1) n
                    | true -> s*)
// c
// Frustrating part is starting with input at "n" and input-1 at i, we could fit this in a complete function, will see afterwards
(*let rec isPrime = fun i n ->
                    match i>1 with
                    | true -> match n%i with
                              | 0 -> false
                              | _ -> isPrime (i-1) n
                    | false -> true*)
// c refactor
(*let isPrime = (fun n ->
                  let a = n - 1
                  let rec ip = (fun i n -> match i>1 with
                                        | true -> match n%i with
                                                  | 0 -> false
                                                  | _ -> ip (i-1) n
                                        | false -> true)
                  ip a n)*)


[<EntryPoint>]
let main argv = 
    // let a = numOdd 1 5 0 // Should give 3, gave 3

    // let a = nextMul 24 7 // should give 28

    // let a = isPrime 6 7
    // let a = isPrime 33 34
    // refactor
    // let a = isPrime 7
    // let a = isPrime 1232

    0 // return an integer exit code
