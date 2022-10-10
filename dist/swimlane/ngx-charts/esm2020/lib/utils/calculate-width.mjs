export function calculateTextWidth(fontFamilyKey, text, defaultWidth = 8) {
    return text.split('').reduce((acc, curr) => {
        const width = fontFamilyKey[curr] || defaultWidth;
        return acc + width;
    }, 0);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLXdpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3V0aWxzL2NhbGN1bGF0ZS13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsYUFBa0MsRUFBRSxJQUFZLEVBQUUsWUFBWSxHQUFHLENBQUM7SUFDbkcsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN6QyxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDO1FBQ2xELE9BQU8sR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVRleHRXaWR0aChmb250RmFtaWx5S2V5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCB0ZXh0OiBzdHJpbmcsIGRlZmF1bHRXaWR0aCA9IDgpIHtcbiAgcmV0dXJuIHRleHQuc3BsaXQoJycpLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBmb250RmFtaWx5S2V5W2N1cnJdIHx8IGRlZmF1bHRXaWR0aDtcbiAgICByZXR1cm4gYWNjICsgd2lkdGg7XG4gIH0sIDApO1xufVxuIl19