var num = praseInt(process.argv[2], 10) ;
var length = process.argv[3] ;

function randomPassword(span) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < span; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    console.log(pass);
}

for(var i = 0; i < num; i++ ){
  randomPassword(length)
}

process.exit(0) ;
