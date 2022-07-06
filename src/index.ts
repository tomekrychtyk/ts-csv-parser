import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const dataReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(dataReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Arsenal', 'arsenal-wins.html');
summary.buildAndPrintReport(matchReader.matches);