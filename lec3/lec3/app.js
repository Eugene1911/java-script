
function counter(str) {
    var main_count = 1;
    for (let i = 1; i <= str.length / 2; i++) {
        var sub = str.substr(0, i);
        var count = 1;
        var marker = sub.length;
        var j = 0;
        while (marker < str.length && j < 100) {
            var sub_index = str.indexOf(sub, marker)
            j++;
            if ((sub_index != -1) && (sub_index == marker)) {
                count++;
                marker += sub.length;
            }
            else {
                count = 0;
                break;
            }
        }
        if (count) {
            main_count = count;
            break;
        }
    }
    return main_count;
}


    var test = [];
    test.push("aaaa");
    test.push("abaa");
    test.push("abab");
    test.push("aaaabaaaab");
    test.push("ababbabab");
    test.push("abababa");
    test.push("abcabcabcabc");
    console.log('======== begin 3.1 =========');
    console.log('test', test);
    for (t = 0; t < test.length; t++) {
        console.log('test#', t + 1, test[t]);
        console.log('answer: ', counter(test[t]));
    }
console.log('======== end 3.1 ========');



function popular(text) {
    var words = text.split(' ');
    var counters = {};
    for (let i = 0; i < words.length; i++) {
        if (counters[words[i]]) counters[words[i]]++;
        else counters[words[i]] = 1;

    }
    var max_count = 0;
    var word = ''
    var count = 0;
    for (let j in counters) {
        if (counters[j] > max_count) {
            word = j;
            max_count = counters[j];
            count = 0;
        } else if (counters[j] == max_count) {
            count++;
        }
    }
    return word && count ? '---' : word ? word : 'Not found'
}

console.log('======== begin 3.2 =========');
console.log(popular("Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera"));
console.log('======== end 3.2 ========');


function brackets(str) {
    var stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '{' || str[i] == '[' || str[i] == '(') {
            stack.push(str[i]);
        }
        else if (str[i] == '}' || str[i] == ']' || str[i] == ')') {
            var last = stack.pop();
            if (last != revert_bracket(str[i]));
                return false;
        } else {
            return false;
        }
    }
    if (stack.length > 0) return false
    return true;
}

function revert_bracket(c) {
    if (c == '}') return '{';
    if (c == ')') return '(';
    if (c == ']') return '[';
    return c;
}

console.log('======== begin 3.3 =========');
console.log(brackets("{{{(([])}[]}}"));
console.log('======== end 3.3 ========');