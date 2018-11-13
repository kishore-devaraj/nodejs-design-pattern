/**
 * Adapter Design Pattern is mainly used for compact between two interfaces
 * Lets say you have adaptee A which have set of interface
 * But the client you can only connect through different set of interface which
 * is not compatible with the adaptee.
 * 
 * 
 * In this kind of situation, we can build adapter, which exposes the methods
 * that the client or app is familiar with, but interally connects them with
 * the adaptee.
 * 
 * This way, the adapter has a interface between non-compatible interfaces.
 */


 function Adaptee (dbConn) {
   this.dbConn = conn
 }

 Adapter.prototype.dbWrite = function () {
   // Writing to the db
 }

 Adapter.prototype.dbRead = function () {
   // Reading from the db
 }




 function Adapter (dbConn) {
    if(typeof dbConn == 'databaseConnection') {
      this.adaptee = new Adaptee(dbConn)
    } else {
      // Assign it to some other common interface
    }
 }

 Adapter.prototype.write = function () {
   // Writing it to the adaptee method
   this.adaptee.dbWrite()
 }

 Adaptee.prototype.read = function () {
   // Reading it fromt he adaptee method
   this.adaptee.dbRead()
 }

/**
 * The above example has a adaptee, that write or read data from the database
 * The adapter provides necessary interface for the client to access those db interfaces
 * If the client wants to console log, during write and read, we can create a new Adaptee
 * and extends the Adapter functionality to achieve the same
 */


 
