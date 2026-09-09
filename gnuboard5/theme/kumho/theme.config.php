<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// 테마가 지원하는 장치 설정 pc, mobile
// 선언하지 않거나 값을 지정하지 않으면 그누보드5의 설정을 따른다.
// G5_SET_DEVICE 상수 설정 보다 우선 적용됨
if(! defined('G5_THEME_DEVICE')) define('G5_THEME_DEVICE', '');

$theme_config = array();

// 갤러리 이미지 수 등의 설정을 지정하시면 게시판관리에서 해당 값을
// 가져오기 기능을 통해 게시판 설정의 해당 필드에 바로 적용할 수 있습니다.
// 사용하지 않는 스킨 설정은 값을 비워두시면 됩니다.

// 테마에서 커뮤니티 지원여부 설정
// 커뮤니티 사용없이 쇼핑몰이 초기화면이라면 false로 설정
// false 설정이면 게시판 head, tail 은 쇼핑몰의 그것이 적용됨
if(! defined('G5_COMMUNITY_USE')) define('G5_COMMUNITY_USE', true);

// 갤러리 이미지 수 등의 설정을 지정하시면 게시판관리에서 해당 값을
// 가져오기 기능을 통해 게시판 설정의 해당 필드에 바로 적용할 수 있습니다.
// 사용하지 않는 스킨 설정은 값을 비워두시면 됩니다.
$theme_config['theme_name'] = '금호건설 테마';