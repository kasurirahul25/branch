curr_sum = 0
        n = len(nums)
        for i in range(k):
            curr_sum += nums[i]
        
        avg_sum = curr_sum / k

        for i in range(k,n):
            curr_sum += nums[i]
            curr_sum -= nums[i-k]

            avg_sum = max(avg_sum,curr_sum / k )
        return avg_sum
            