<h2><a href="https://leetcode.com/problems/contains-duplicate">217. Contains Duplicate</a></h2><h3>Easy</h3><hr><p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The element 1 occurs at the indices 0 and 3.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>All elements are distinct.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,1,1,3,3,4,3,2,4,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

## 문제 풀이 후 정리
```
const answer = !(JSON.stringify([...set]) === JSON.stringify(nums));
``` 
이렇게 셋과 배열을 비교 했는데 그냥 배열과 셋의 길이를 비교하는 것으로 간단하게 중복이 있는 지 확인이 가능하다. <br>
길이를 비교하는 것은 상수 시간이 소요되고, 반대로 각 요소를 비교하는 것은 모든 문자를 확인해야하므로 O(n)의 시간이 더 필요하기 때문에 더 런타임이 길어진다.

```
const answer = !(set.size === nums.length);
```
셋의 길이는 size로 알 수 있다!
