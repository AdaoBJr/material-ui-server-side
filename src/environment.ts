/**
 * Esse arquivo resolve as variáveis de ambiente no contexto docker e desenvolvimento local.
 * No caso do Docker, ele funciona em conjunto ao env.template.js. Toda variável presente nesse arquivo precisa
 * de um config relativa no arquivo env.template.js.
 * IMPORTANTE: nunca configure informações sensíveis nas variáveis de ambiente do frontend, pois tudo que está no client é público!
 */
declare const process: any;
/*istanbul ignore next*/
function isBrowser(): boolean {
  try {
    return typeof window !== 'undefined';
  } catch (e) {
    return false;
  }
}
/*istanbul ignore next*/
const isDevelopment = process.env.NODE_ENV === 'development';
/*istanbul ignore next*/
const ENV =
  isBrowser() && !isDevelopment ? (window as any)['SN-GESTAO-VENDA'] : process.env; // resolve variáveis de ambiente no contexto Docker

export interface Environment {
  SERVER_ENV: 'local' | 'dev' | 'tst' | 'prd';
  URL_ESTOQUE: string;
}
/*istanbul ignore next*/
export const environment: Environment = {
  ...ENV,
};
/*istanbul ignore next*/
export const getEnv = (env = process.env.NODE_ENV): Environment => {
  return env === 'production'
    ? environment
    : {
        SERVER_ENV: 'local',
        URL_ESTOQUE:
          'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=',
      };
};
