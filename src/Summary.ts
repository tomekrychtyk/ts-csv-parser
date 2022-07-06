import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReporter } from './reporters/HtmlReporter';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, reportFileName: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReporter(reportFileName))
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}