<? 
$G5_PATH="./gnuboard5";
include_once($G5_PATH.'/common.php');
include_once($G5_PATH.'/head.sub.php');
include_once($G5_PATH.'/lib/outlogin.lib.php');
?>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/main.css" />
    <link rel="stylesheet" href="/gnuboard5/skin/outlogin/basic/style.css">
<link rel="stylesheet" href="/gnuboard5/skin/member/basic/style.css">
<script src="/gnuboard5/js/jquery-1.12.4.min.js"></script>
<script src="/gnuboard5/js/common.js"></script>
  </head>
  <body>
    <div id="wrap">
      <header>
        <h1><a href="/">Header</a></h1>
      </header>
      <section>
        <div class="left">
          <div class="login"><? echo outlogin("basic"); ?></div>
          <ul>
            <li><a href="/info.php">회사소개</a></li>
            <li><a href="http://po0858.dothome.co.kr/gnuboard5/bbs/board.php?bo_table=notice">공지사항</a></li>
            <li><a href="">자유게시판</a></li>
            <li><a href="">제품소개</a></li>
          </ul>
        </div>
        <div class="right">