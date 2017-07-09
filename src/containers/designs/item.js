import { connect } from 'react-redux';
import DesignsItem from '../../components/designs/item';

const purchaseUrlFromProps = (substrate, props) => {
  if (props[`for_sale_as_${substrate}`]) {
    // For gift wrap, convert from url response format to url request format.
    const paramSubstrate = substrate == 'gift_wrap' ? 'giftwrap' : substrate
    return `https://www.spoonflower.com/${paramSubstrate}/${props.slug}`;
  } else {
    return null;
  }
};

const mapStateToProps = (state, ownProps) => ({
  firstName:       ownProps.user.first_name,
  lastName:        ownProps.user.last_name,
  screenName:      ownProps.user.screen_name,
  thumbnailUrl:    ownProps.thumbnail_url,
  description:     ownProps.short_description,
  numFavorites:    ownProps.num_favorites,
  fabricImageUrl:  ownProps.fabric_image_url,
  projectImageUrl: ownProps.project_image_url,
  tags:            ownProps.tags || [],
  fabricUrl:       purchaseUrlFromProps('fabric', ownProps),
  wallpaperUrl:    purchaseUrlFromProps('wallpaper', ownProps),
  giftWrapUrl:     purchaseUrlFromProps('gift_wrap', ownProps),
});

const DesignsItemContainer = connect(mapStateToProps)(DesignsItem);

export default DesignsItemContainer;
