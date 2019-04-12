let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punc) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        
        if([i] % 3 === 0){
        buildMeUp = `${buildMeUp} ${theWordArray[i]} ${punc}`
            
        }else{
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
        }
            //Otherwise, just concatenate the word itself.
         console.log(buildMeUp)


        // Print buildMeUp to the console
    }

}

addExcitement(sentence, "?")

