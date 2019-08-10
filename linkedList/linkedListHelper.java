import java.util.*; 

public class LinkedListHelper {
    public LinkedList<String> alphabets = new LinkedList<String>();
    public Map<String, Integer> map=new HashMap<String, Integer>(); 

    public LinkedList minimizeList(LinkedList node) {

        for (int i = 0; i < node.size(); i++) {

            if(map.containsKey(node.get(i))) {
                int value = map.get(node.get(i));
                value += 1;
                map.put(node.get(i).toString(), value);
            } else {
                map.put(node.get(i).toString(), 1);
            }

            if (map.get(node.get(i)) < 3 ) {
                alphabets.add(node.get(i).toString());
            }
        }

        return alphabets;
    }
}  



