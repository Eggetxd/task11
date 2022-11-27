# INSERTION SORT #

i ← 1
while i < length(A)
    x ← A[i]
    j ← i - 1
    while j >= 0 and A[j] > x
        A[j+1] ← A[j]
        j ← j - 1
    end while
    A[j+1] ← x
    i ← i + 1
end while
return A

function insertionSort() {
    for (let i = 1; i < amount; i++) {
        let x = graph[i];
        let j = i - 1;
        while (j >= 0 && graph[j] > x) {
            graph[j+1] = graph[j];
            j--;
        }
        graph[j+1] = x;
    }
}



# SELECTION SORT #

i ← 0
while i < length(A)-1
    minIndex ← i
    j ← i + 1
    while j < length(A)
        if A[j] < A[minIndex] then
            minIndex ← j
        end if
    end while
    if minIndex != i then
        swap A[i] and A[minIndex]
    end if
    i ← i + 1
end while
return A

function selection() {
    for (let i = 0; i < amount-1; i++) {
        let minIndex = i;
        let j = i+1;
        while (j < amount) {
            if (graph[j] < graph[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = graph[i];
            graph[i] = graph[minIndex];
            graph[minIndex] = temp;
        }
    }
}



# MERGE SORT (top-down) #

mergesort(A as list)
    if length(A) == 1 then return A

    left ← A[0]..A[length(A)/2]
    right ← A[length(A)/2]..A[length(A)-1]

    left ← mergesort(left)
    right ← mergesort(right)

    return merge(left, right)
end func

function mergesort(A[]) {
    if (A.length == 1) {
        return A;
    }
    let left = ???
    let right = ???

    left = mergesort(left);
    right = mergesort(right);

    return merge(left, right);
}

merge(A as list, B as list):
    C ← []

    while length(A) > 0 and length(B) > 0
        if A[0] > B[0] then
            add B[0] to the end of C
            remove B[0] from B
        else
            add A[0] to the end of C
            remove A[0] from A
        end if
    end while
    while length(A) > 0
        add A[0] to the end of C
        remove A[0] from A
    end while
    while length(B) > 0
        add B[0] to the end of C
        remove B[0] from B
    end while
    return C
end func

function merge(A[], B[]) {
    let C = []; //list elr lika stor som A+B
    while (A.length > 0 && B.length) {
        if (A[0] > B[0]) {
            C.add(B[0]);
            B.remove(0);
        } else {
            C.add(A[0]);
            A.remove(0);
        }
    }
    while (A.length > 0) {
        C.add(A[0]);
        A.remove(0);
    }
    while (B.length > 0) {
        C.add(B[0]);
        B.remove(0);
    }
    return C;
}
