import junit.framework.*;

public class TestLinkedListHelper extends TestCase {
   protected List<Double> alpha;
   LinkedListHelper llHelper = new LinkedListHelper();
   // assigning the values
   protected void setUp(){
       alpha = new LinkedList<Double>(Arrays.asList('E', 'B', 'E', 'E', 'B', 'A', 'B'));
   }
   

   // test method to add two values
   public void getLengthithNoDuplicates(){
       LinkedList mini= LllHelper.minimizeList(alpha);
       assertTrue(mini.size == 5);
   }

   public void getValueWithNoDuplicates(){
       LinkedList mini= LllHelper.minimizeList(alpha);
       assertTrue(mini.size == 5);
   }
}