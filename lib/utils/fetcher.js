import axios from '@/lib/axios'

export default async function Fetcher (url) {
  const { data } = await axios.get(url)

  return data
}
