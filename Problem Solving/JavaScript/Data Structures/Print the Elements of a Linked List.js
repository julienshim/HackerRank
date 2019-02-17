function printLinkedList(head) {
    while(head.date !== null) {
        console.log(head.data);
        printLinkedList(head.next);
    }

}