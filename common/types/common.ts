export interface NavigationItem {
  title: string
  url: string
  isActive?: boolean
}

export interface ImgurResponse {
  status: number;
  success: boolean;
  data: Data;
}

export interface Data {
  id: string;
  deletehash: string;
  account_id?: any;
  account_url?: any;
  ad_type?: any;
  ad_url?: any;
  title: string;
  description: string;
  name: string;
  type: string;
  width: number;
  height: number;
  size: number;
  views: number;
  section?: any;
  vote?: any;
  bandwidth: number;
  animated: boolean;
  favorite: boolean;
  in_gallery: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  is_ad: boolean;
  nsfw?: any;
  link: string;
  tags: any[];
  datetime: number;
  mp4: string;
  hls: string;
}