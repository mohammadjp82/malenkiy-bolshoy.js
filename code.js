        var list =[1,12,55,555,88,44,11,66,99,77,999,888,444,326,5849,22546,5542,7821,54,2,3,6,10];
        var bolshoy = list[1];
        var malenkiy = list[1];
        function findbolshoy() {
            list.forEach(list => {
                if (list > bolshoy){
                    bolshoy = list;}
            });
            return bolshoy;}
        function findmalenkiy() {
            list.forEach(list => {
                if (list < malenkiy){
                    malenkiy = list;}
            });
            return malenkiy;}
        findbolshoy(0);
        findmalenkiy(0);
        console.log('bolshoy : ' , bolshoy);
        console.log('malenkiy :' , malenkiy);