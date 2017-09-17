import reduce from 'lodash/reduce'
import tap from 'lodash/tap'

const mapFrom = (array, callback) => (
    reduce(array, (result, item) => (
        tap(result, () => {
            result[item] = callback(item)
        })
    ), {})
)

export default mapFrom
