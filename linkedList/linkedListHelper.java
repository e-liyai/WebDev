import java.util.*; 

public class LinkedListHelper {
    public LinkedList<Char> alphabets = new LinkedList<Char>();
    public Map<Char, Integer> map=new HashMap<Char, Integer>(); 

    public LinkedList minimizeList(node) {

        for (Iterator i = node.iterator(); node.hasNext();) {
            if(map.containsKey(node.next())) {
                int value = map.get(node.next());
                value += 1;
                map.put(node.next(), value);
            } else {
                map.put(node.next(), 1);
            }

            if (map.get(node.next()) < 3 ) {
                alphabet.add(node.next());
            }
        }

        return alphabet;
    }
}  



