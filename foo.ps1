$lines = [System.IO.File]::ReadLines("c:\git\FXHash_p5\words.txt");

$stream = [System.IO.StreamWriter]::new("c:\git\FXHash_p5\words.js");
$stream.Write("window.wordsList = [");

foreach($line in $lines)
{
    if ($line.length -gt 3)
    {
        $stream.WriteLine("'$line', ");
    }
}
$stream.Write("]");
$stream.close();