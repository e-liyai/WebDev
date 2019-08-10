import junit.framework.*;

public class TestLinkedListHelper extends TestCase {
   protected LinkedList<String> alpha;
   LinkedListHelper llHelper = new LinkedListHelper();
   // assigning the values
   protected void setUp(){
       alpha = new LinkedList<String>();
       alpha.add("E");
       alpha.add("B");
       alpha.add("E");
       alpha.add("E");
       alpha.add("B");
       alpha.add("A");
       alpha.add("B");
   }
   
   public void getLengthithNoDuplicates(){
       LinkedList mini= llHelper.minimizeList(alpha);
       assertTrue(mini.size() == 5);
   }

   public void getValueWithNoDuplicates(){
       LinkedList mini= llHelper.minimizeList(alpha);
       assertTrue(mini.get(2).toString() != mini.get(3).toString());
   }
}