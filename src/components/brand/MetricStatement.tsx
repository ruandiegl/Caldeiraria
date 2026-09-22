import type { HomeMetric } from '../../content/homeContent';
import { MetricContext, MetricFigure, MetricLabel, MetricValue } from './styles';

type MetricStatementProps = {
  metric: HomeMetric;
};

export function MetricStatement({ metric }: MetricStatementProps) {
  return (
    <MetricFigure aria-label={`${metric.value} ${metric.label}`}>
      <MetricValue>{metric.value}</MetricValue>
      <MetricLabel>{metric.label}</MetricLabel>
      <MetricContext>{metric.context}</MetricContext>
    </MetricFigure>
  );
}
