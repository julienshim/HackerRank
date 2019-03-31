function Solution(){

	this.insert=function(head,data){
          //complete this method
        if (head === null) {
            head = new Node(data);
        } else if (head.next === null) {
            head.next = new Node(data);
        } else {
            this.insert(head.next, data);
        }
        return head;
    };

//	this.display=function(head){
//        var start=head;
//            while(start){
//                process.stdout.write(start.data+" ");
//                start=start.next;
//            }
//    };
}
