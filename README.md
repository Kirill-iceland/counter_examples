# Counter examples of Euler's conjecture on sums of like powers.   
This script was made to find counter examples of Euler's conjecture on sums of like powers. This was inspired by [Mathologer](https://www.youtube.com/c/Mathologer) and his [video](https://www.youtube.com/watch?v=AO-W5aEJ3Wg&t=1161s).
## Currently examples that are found are:   
### Type (133n)⁵ + (110n)⁵ + (84n)⁵ + (27n)⁵ = (144n)⁵:   
* A: 133, B: 110, C: 84, D: 27, E: 144
* A: 266, B: 220, C: 168, D: 54, E: 288
* A: 399, B: 330, C: 252, D: 81, E: 432
* A: 532, B: 440, C: 336, D: 108, E: 576   
All examples are stored [here](https://github.com/Kirill-iceland/counter_examples/blob/master/data/pow5.json)  
How many numbrers of As have been checked are stored [here](https://github.com/Kirill-iceland/counter_examples/blob/master/data/info_pow5.json)
## Proof that there is infinite amound of examples:
### Theory:
If there are `A, B, C, D, E ∈ ℤ+` that satisfy `A⁵ + B⁵ + C⁵ + D⁵ = E⁵` then there are `(nA)⁵ + (nB)⁵ + (nC)⁵ + (nD)⁵ = (nE)⁵, n ∈ ℤ+`. 
Because there is infenetly many **n** there are infenetly many examples.
### Proof:
```
(nA)⁵ + (nB)⁵ + (nC)⁵ + (nD)⁵ = (nE)⁵ => n⁵A⁵ + n⁵B⁵ + n⁵C⁵ + n⁵D⁵ = n⁵E⁵   
                                      => n⁵(A⁵ + B⁵ + C⁵ + D⁵) = n⁵E⁵  
                                      => A⁵ + B⁵ + C⁵ + D⁵ = E⁵  
```