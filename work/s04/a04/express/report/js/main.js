var myData;

fetch('data/skolenhet.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        myData = data.Skolenheter;


        if(myData.length > 0) {

            var tempp = "";

            myData.forEach((u) => {

                tempp += "<tr>"
                tempp += "<td>" + u.Skolenhetskod + "</td>";
                tempp += "<td>" + u.Skolenhetsnamn + "</td>";
                tempp += "<td>" + u.Kommunkod + "</td>";
                tempp += "<td>" + u.PeOrgNr + "</td>";
                tempp += "<tr>"


            });

            document.getElementById('school_table').innerHTML = tempp;


        }


    });
