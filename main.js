function ltf()
{
    //How to declare the arrays ? the id to be refer for innerHTML is declaration_of_arrays
var fruits=["mango","apple","banana"];
document.getElementById("declaration_of_arrays").innerHTML=fruits;
    //How to fetch the first element of the array ? the id to be refer for innerHTML is access_first_element
var first_fruit=fruits[0];
document.getElementById("access_first_element").innerHTML=first_fruit;
    //How to fetch the second element of the array ? the id to be refer for innerHTML is access_second_element
    var second_fruit=fruits[1];
    document.getElementById("access_second_element").innerHTML=second_fruit;
    //How to fetch the third element of the array ? the id to be refer for innerHTML is access_third_element
    var third_fruit=fruits[2];
    document.getElementById("access_third_element").innerHTML=third_fruit;
    //How to get the length of the array ? the id to be refer for innerHTML is display_length_of_array
var length_arrey =fruits.length;
document.getElementById("display_length_of_array").innerHTML=length_arrey;
    //How to loop the array ? the id to be refer for innerHTML is loop_the_array
    var array_value = "";
     for (i = 0; i < fruits.length; i++)
     
     { 
         console.log(fruits[i]); 
          array_value = array_value + fruits[i] + "<br>";
         } 
         document.getElementById("loop_the_array").innerHTML = array_value;

    //adding element at the end of the array using push method
    //How to add element at the end of the array ? the id to be refer for innerHTML is add_element_at_the_end_of_array

    //How to more elements at the end of the array ? the id to be refer for innerHTML is add_more_element_at_the_end_of_array

    //How to declare array with alphabets ? the id to be refer for innerHTML is display_alphabets_array

    //How to sort array with alphabets ? the id to be refer for innerHTML is display_sorted_alphabets_array

    //How to reverse the array ? the id to be refer for innerHTML is display_reverse_array

    //How to declare array with numbers ? the id to be refer for innerHTML is display_number_array

    //How to find the maximum number from the array with numbers ? the id to be refer for innerHTML is display_maximum_number

    //How to find the minimum number from the array with numbers ? the id to be refer for innerHTML is display_minimum_number

    console.log("ADDITIONAL ACTIVITY");

    //Use unshift method to add element at the start of the array . the id to be refer for innerHTML is add_element_at_the_start_of_array

    //Use unshift method to add more elements at the start of the array . the id to be refer for innerHTML is add_more_element_at_the_start_of_array

    //Use shift method to remove elements from the start of the array . the id to be refer for innerHTML is remove_element_from_start_of_array

    //Use pop method to remove elements from the end of the array . the id to be refer for innerHTML is remove_element_from_end_of_array

    //How declare array with first world country ? 

    //How declare array with second world country ? 

    //use concat method to merge two arrays . the id to be refer for innerHTML is merge_two_arrays

}