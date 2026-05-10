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
/// ENTER SUBJECTS: 4,5,
/// SUBJECT 1 MARKS: 44
/// SUBJECT 2 MARKS: 23
/// SUBJECT 3 MARKS: 34
/// SUBJECT 4 MARKS: 30
/// SUBJECT 5 MARKS: 45
/// OBTAINED: 176
/// TOTAL: 250
/// OBTAINED PERCENTAGE: 70.40%
