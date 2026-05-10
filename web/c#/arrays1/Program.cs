using System;
class Program
{
    public static void Main(string[] args)
    {
        int[] numbers = { 44, 23, 34, 30, 45 };
        // string[] fruits = { "Apple", 45, "Orange", "Mango", "Grapes" };

        int subjects = Convert.ToInt32(Console.ReadLine("ENTER SUBJECTS: "));

        int[] sub = new int[subjects];

        double obtained = 0;
        double total = 250;

        for (int i = 0; i < numbers.Length; i++)
        {
            obtained = obtained + numbers[i];
        }

        double prcnt = (obtained / total) * 100;
        Console.WriteLine("Obtained: " + obtained);
        Console.WriteLine("Total: " + total);
        Console.WriteLine("Obtained Percentage: " + prcnt.ToString("F2") + "%");
    }
}

/// Assignment 
/// ENTER NUMBER OF SUBJECTS: 5
/// ENTER TOTAL MARKS: 250
/// ENTER SUBJECT 1 MARKS: 44
/// ENTER SUBJECT 2 MARKS: 23
/// ENTER SUBJECT 3 MARKS: 34
/// ENTER SUBJECT 4 MARKS: 30
/// ENTER SUBJECT 5 MARKS: 45
///
/// output: 
/// OBTAINED: 176
/// TOTAL: 250
/// OBTAINED PERCENTAGE: 70.40%
