function maximum(a, b, c){
        return Math.max(Math.max(a, b), c);
    }
    function minimum(a, b, c){
        return Math.min(Math.min(a, b), c);
    }
       
    function smallestTriplet(triplet1, triplet2, triplet3, n){
          
        triplet1.sort(function(a, b){return a - b});
        triplet2.sort(function(a, b){return a - b});
        triplet3.sort(function(a, b){return a - b});
       
       
        let res_min = 0, res_max = 0, res_mid = 0;
       
      
        let i = 0, j = 0, k = 0;
       
       
        let diff = 2147488788;
           
        while (i < n && j < n && k < n)
        {
            let sum = triplet1[i] + triplet2[j] + triplet3[k];
       
        
            let max = maximum(triplet1[i], triplet2[j], triplet3[k]);
       
          
            let min = minimum(triplet1[i], triplet2[j], triplet3[k]);
            if (min == triplet1[i])
                i++;
            else if (min == triplet2[j])
                j++;
            else
                k++;
       
         
            if (diff > (max - min))
            {
                diff = max - min;
                res_max = max;
                res_mid = sum - (max + min);
                res_min = min;
            }
        }
       
        console.log(res_max + ", " + res_mid + ", " + res_min);
    }
     
    let triplet1 = [5, 2, 8];
    let triplet2 = [10, 7, 12];
    let triplet3 = [9, 14, 6];
 
    let n = triplet1.length;
 
    smallestTriplet(triplet1,triplet2 , triplet3, n);