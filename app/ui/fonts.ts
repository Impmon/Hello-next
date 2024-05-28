/**
 * 从 next/font/google 模块导入 Inter 字体 - 这将是您的主要字体。然后，指定您要加载的子集。在本例中，'latin'：
 */
import { Inter, Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});