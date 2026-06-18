---
layout: page
title: "두 소설의 단어 빈도 비교"
permalink: /compare/
---
<h2>A Study in Scarlet vs. The Hound of the Baskervilles</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;">
        <h3>A Study in Scarlet</h3>
        <div style="height: 500px;"><canvas id="chart-scarlet"></canvas></div>
    </div>
    <div style="flex: 1;">
        <h3>The Hound of the Baskervilles</h3>
        <div style="height: 500px;"><canvas id="chart-hound"></canvas></div>
    </div>
</div>

## 보고서

### 추가한 불용어와 근거

NLTK 기본 목록 외에 다음 N개의 단어를 'data/stopwords-custom.txt'에 추가했다: 'said', 'would', 'could', 'upon', 'one', 'shall', 'may', 'must', 'man', 'yet', 'even', 'might', 'us'

'one', 'us', 'man' 등의 명사는 기존 불용어 목록에 대명사가 있다는 점을 고려해 빈도 분석에서 제외하였다. 나머지 단어들은 모두 어휘적 의미를 담기보다는 문법적 기능을 한다고 판단해 빈도 분석에서 제외하였다. 이로써 빈도 분석에는 R-expression 명사나 본동사가 남을 것을 기대할 수 있다.

### 두 작품의 단어 빈도가 들려주는 이야기

- **공통으로 도드라지는 단어**: 'time', 'night'
- **한 작품에만 도드라지는 단어**와 그것이 시사하는 작품의 특성:
    - Frankenstein: 'heart', 'feelings', 'felt' 등 **인간의 감정**과 관련된 단어들이 도드라진다. 소설에 인외 존재인 프랑켄슈타인이 등장하기에 이 소설이 *인간적임*이 무엇인지에 대해 다룰 것이라 예상할 수 있고, 그 특성이 자주 등장하는 어휘에서도 나타났다는 가설을 세워 볼 수 있다.
    - Dracula: 'come', 'came', 'went', 'go' 등 장소 이동과 관련된 동사들이 도드라진다. 소설에서 등장인물들의 장소 이동이 잦을 것이고 그것이 자주 사용된 어휘에서 드러났다는 가설을 세워 볼 수 있다.

    
{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/compare.js"></script>