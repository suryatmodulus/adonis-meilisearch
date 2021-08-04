/*
 * @bitkidd/adonis-meilisearch
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Adonis/Addons/MeiliSearch' {
  import { MeiliSearch as MeilisearchContract } from 'meilisearch'

  const Meilisearch: MeilisearchContract
  export default Meilisearch
}
